import { Component, OnInit } from '@angular/core';
import {faPlus,faArrowCircleLeft,faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  faPlus = faPlus
  faArrowCircleRight = faArrowCircleRight
  faArrowCircleLeft = faArrowCircleLeft
  AllImg:any[] = []
  imgInformation:any = ''
  indexImg!:number
constructor()
{}

ngOnInit(): void {
localStorage.setItem('img',JSON.stringify(this.AllImg))
}

// getAll image
setImg(event:any)
{
let currentImg = event.target.files
let sliderLength = this.AllImg.length + currentImg.length
 if(sliderLength > 5)
 {
  let imgsLimit = 5 - this.AllImg.length
  for(let x = 0; x < imgsLimit; x++)
  {
   let file = currentImg[x]
   let reder = new FileReader()
   reder.readAsDataURL(file)
    reder.onload = () => {
      this.AllImg.push(reder.result)
    }
  }
 }else
 {
  for(let x = 0; x < currentImg.length; x++)
{
 let file = currentImg[x]
 let reder = new FileReader()
 reder.readAsDataURL(file)
  reder.onload = () => {
    this.AllImg.push(reder.result)
  }
}
 }
}

// get image
getImg(index:any)
{
  this.indexImg = index
  this.imgInformation = this.AllImg[index]
}

// deleteImg
deleteImg()
{
 this.AllImg.splice(this.indexImg, 1)
 if(this.AllImg.length == this.indexImg)
 {
  --this.indexImg
  this.imgInformation = this.AllImg[this.indexImg]
 }else
 {
  this.imgInformation = this.AllImg[this.indexImg]
 }
}

// prev()
prev()
{
 this.imgInformation = this.AllImg[--this.indexImg]
}
// next()
next()
{
  this.imgInformation = this.AllImg[++this.indexImg]
}
}
