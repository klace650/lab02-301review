'use strict';
console.log('from review')
let keywordArray = [];

console.log(keywordArray);
$.ajax('./data/page-1.json').then(data => {
  data.forEach(obj => {
    let newObj = new Picture(obj.image_url, obj.title, obj.description, obj.keyword, obj.horns);
    post(newObj);

  })
})
function Picture(image, title, description, keyword, horns)
{
  this.image = image;
  this.title = title;
  this.desc = description;
  this.keyword = keyword;
  this.horns = horns;
  keywordArray.push(keyword);
}
function post (obj){
  let templatePic = {
    name: obj.name,
    src: obj.image,
    desc: obj.desc,
    keyword: obj.keyword,
    horns: obj.horns
  };
  let $template = $('#template').html();
  let rendered = Mustache.render($template, templatePic);
  $('#container').append(rendered);
};

let drop = $('#dropDown').html();
let listed = Mustache.render(drop);


