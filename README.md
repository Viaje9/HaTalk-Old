# HaTalk

HaTalk是個練習的作品    
最終目標是完成一個線上聊天室    
並上傳至heroku  
計畫以node為基底實做，並從NPM開始練習   
接著導入express作為聊天室的後端框架(Route、Middleware、API)   
以WebSocket達成雙向資料傳輸讓使用者能夠即時通訊   
並嘗試規劃MVC的架構     
controller暫定如此      
model使用mongoose      
DB使用的是MongoDB Atlas的免費版本   
(雖然heroku有提供PostgreSQL的免費空間但有點難寫所以改用MongoDB)  
view的部分以vue作為前端框架並實作SPA     
並以手動配置webpack     
載入vue-loader、style-loader、css-loader等來練習webpack      
還有導入webpack-dev-server    
原本是使用webpack watch + live serve    
但是.vue如果編譯錯誤(css語法錯誤時)瀏覽器會直接打開debug模式   
