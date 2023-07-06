## JavaScript Chapter 24
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 24
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Intro 
        教學影片開頭和介紹

###  2. What is a Higher Order Function
        取一個或多個函數作為參數，回傳一個函數作為結果

###  3. The data we are working with
        100 篇貼文，資料型態為 array，有 100 個物件object。
        從 posts.js 匯入資料

###  4. forEach() is better than a for loop!
        使用 Array.forEach() 回傳 100 篇貼文為100 個 物件object
 
###  5. filter() helps select specific data from results
        (1)使用 Array.forEach() 從結果篩選 userId 為 1 的 10 篇貼文。
        (2)使用 Array.forEach() 從結果篩選 userId 為 5 的 10 篇貼文。

###  6. map() lets you transform the data
        (1)當 userId 為 5，使用 Array.map() 轉換 post.id 為 10 倍
        (2)當 userId 為 1，使用 Array.map() 轉換 post.id 為 10 倍
        (3)當 userId 為 3，使用 Array.map() 轉換 post.id 為 10 倍
        (4)當 userId 為 10，使用 Array.map() 轉換 post.id 為 10 倍

###  7.  reduce() computes a single value from the data
        (1)當 userId 為 10，使用 Array.reduce()，參數為 sum 和 post，將 post 逐步累加至 sum，計算 userId 加總 為 9550
        (2)當 userId 為 5，使用 Array.reduce()，參數為 sum 和 post，將 post 逐步累加至 sum，計算 userId 加總 為 4550
        (3)當 userId 為 1，使用 Array.reduce()，參數為 sum 和 post，將 post 逐步累加至 sum，計算 userId 加總 為 550