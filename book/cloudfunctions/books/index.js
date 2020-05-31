// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const doubanbook = require('doubanbook')
const cherrio = require('cheerio')

async function getData (isbn) {
  let url = `https://search.douban.com/book/subject_search?search_text=${isbn}`
  let result = await axios.get(url)
  if(result.data){
    let reg = /window\.__DATA__ = "(.*)"/
    reg.exec(result.data)
    let bookInfo = doubanbook(RegExp.$1)[0]
    // console.log(bookInfo)
    let coverUrl = bookInfo.url
    let detailResult = await axios.get(coverUrl)
    // console.log(detailResult)
    let $ = cherrio.load(detailResult.data)
    let intro = $('#link-report .intro').text().trim();
    let tags = []
    $("#db-tags-section .indent span").each((i, v) => {
      // console.log($(v).text())
      tags.push($(v).text().trim())
    })
    let comments = []
    $("#comments li.comment-item").each((i, v) => {
      let vote = $(v).find('.vote-count').text()
      let comment_person = $(v).find('.comment-info a').text()
      let star = $(v).find('.user-stars').attr('class').match(/\d+/)[0]
      let comment_date = $(v).find('.comment-info span+span').text()
      comments.push({
        vote,
        comment_person,
        star,
        comment_date
      })
    })
    let bookResult = {
      ...bookInfo,
      intro,
      tags: [...new Set(tags)],
      comments: [...new Set(comments)],
      create_time: Date.now()
    }
    // console.log(bookResult)
    return bookResult
  }
}

// 9787119065892 9787222070370 9789889955991 9787798631449 9789862878026
// getData(9787119065892)

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let bookinfo = await getData(event.isbn)

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    bookinfo
  }
}