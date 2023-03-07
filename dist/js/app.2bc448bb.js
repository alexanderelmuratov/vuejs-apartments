(function(){"use strict";var e={663:function(e,i,t){var a=t(9242),r=t(3396);function n(e,i,t,a,n,o){const u=(0,r.up)("ApartmentsList");return(0,r.wg)(),(0,r.j4)(u,{items:n.apartments},null,8,["items"])}const o={class:"apartments-list"};function u(e,i,t,a,n,u){const m=(0,r.up)("ApartmentsItem"),s=(0,r.up)("PageContainer");return(0,r.wg)(),(0,r.j4)(s,null,{default:(0,r.w5)((()=>[(0,r._)("div",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.items,(({id:e,descr:i,rating:t,imgUrl:a,price:n})=>((0,r.wg)(),(0,r.j4)(m,{key:e,desc:i,rating:t,imgSrc:a,price:n},null,8,["desc","rating","imgSrc","price"])))),128))])])),_:1})}const m={class:"container"};function s(e,i,t,a,n,o){return(0,r.wg)(),(0,r.iD)("div",m,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var c={name:"PageContainer"},l=t(89);const p=(0,l.Z)(c,[["render",s],["__scopeId","data-v-3aac8b3e"]]);var d=p,g=t(7139);const f={class:"apartments-item"},q={class:"apartments-item__inner"},v={class:"apartments-item__content"},b={class:"apartments-item__description"},h={class:"apartments-item__price"},y=["src"];function w(e,i,t,a,n,o){const u=(0,r.up)("StarRating");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",q,[(0,r._)("div",v,[(0,r._)("p",b,(0,g.zw)(t.desc),1),(0,r.Wm)(u,{rating:t.rating},null,8,["rating"]),(0,r._)("div",h,"UAH "+(0,g.zw)(t.price),1)]),(0,r._)("img",{src:t.imgSrc,alt:"",class:"apartments-item__photo"},null,8,y)])])}const _={class:"star-rating"};function j(e,i,t,a,n,o){return(0,r.wg)(),(0,r.iD)("div",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.starLimit,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e,class:"star star--outlined"})))),128)),(0,r._)("div",{class:"star-rating__colored",style:(0,g.j5)(o.ratingWidthStyle)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.starLimit,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e,class:"star star--colored"})))),128))],4)])}var D={name:"StarRating",props:{rating:{type:Number,default:0},starLimit:{type:Number,default:5}},computed:{ratingWidth(){return this.rating/this.starLimit*100},ratingWidthStyle(){return`width: ${this.ratingWidth}%;`}}};const S=(0,l.Z)(D,[["render",j],["__scopeId","data-v-453f3cea"]]);var U=S,x={name:"ApartmentsItem",components:{StarRating:U},props:{desc:{type:String,default:""},rating:{type:Number,default:0},price:{type:Number,required:!0},imgSrc:{type:String,default:""}}};const A=(0,l.Z)(x,[["render",w],["__scopeId","data-v-8fca3266"]]);var O=A,C={name:"ApartmentsList",components:{PageContainer:d,ApartmentsItem:O},props:{items:{type:Array,default:()=>[]}}};const L=(0,l.Z)(C,[["render",u],["__scopeId","data-v-7dbc34a0"]]);var N=L,k=[{id:"5f689a2c09b16000e9a2f47b",title:"Delectus et iste.",imgUrl:"/img/apartments/apartment-1.jpg",descr:"Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.",rating:3,price:1667,location:{city:"Dnipro"},owner:{name:"Bobbi",phone:"582-740-2926",email:"Pete_Carter53@hotmail.com"}},{id:"5f689a2c09b16000e9a2f47d",title:"Eaque suscipit incidunt.",imgUrl:"/img/apartments/apartment-2.jpg",descr:"Hic dolorem ab est hic iusto sed fugiat id aut. Eum reprehenderit eius odit perspiciatis illo. Odit repellat praesentium. Ea consequatur vero sed pariatur dolores omnis. Sed omnis vel atque sapiente natus voluptas dolores. Magnam enim consequuntur iure cupiditate voluptatem rerum.",rating:3,price:2740,location:{city:"Poltava"},owner:{name:"Leonor",phone:"565-314-3112",email:"Forest.Prosacco53@gmail.com"}},{id:"5f689a2c09b16000e9a2f48a",title:"Doloremque labore ullam molestiae quis quis eos consequatur.",imgUrl:"/img/apartments/apartment-3.jpg",descr:"Quia cum sed qui. Tempore ab tenetur aut et itaque omnis exercitationem consequatur eum. Hic non ad atque magni error earum aspernatur. Dolores ipsa veniam.",rating:1,price:2153,location:{city:"Kharkiv"},owner:{name:"Fanny",phone:"731-245-4377",email:"Caroline_Nienow61@gmail.com"}},{id:"5f689a2c09b16000e9a2f481",title:"Dolor at inventore et voluptas omnis unde.",imgUrl:"/img/apartments/apartment-4.jpg",descr:"Nihil dolorem in qui et occaecati. Sit qui deleniti. Expedita doloremque fugit culpa sit vel labore.",rating:3,price:3074,location:{city:"Poltava"},owner:{name:"Wyman",phone:"758-660-9577",email:"Jack.Kemmer@yahoo.com"}},{id:"5f689a2c09b16000e9a2f47c",title:"Sapiente sit consequuntur odit reprehenderit earum maxime.",imgUrl:"/img/apartments/apartment-5.jpg",descr:"Voluptatem sed dolor. Voluptatem eos minus nostrum quis facilis voluptas fugiat. Vel voluptas molestiae nesciunt.",rating:2,price:2642,location:{city:"Mariupol"},owner:{name:"Wilma",phone:"327-157-5816",email:"Macy72@gmail.com"}},{id:"5f689a2c09b16000e9a2f47f",title:"Ut accusantium atque at aut aliquid distinctio corporis.",imgUrl:"/img/apartments/apartment-6.jpg",descr:"Odit repudiandae autem hic eos. Fuga omnis laboriosam similique rerum. Delectus exercitationem a quod. Sunt nobis omnis expedita veniam sit minus eos culpa. Aliquid mollitia deserunt sed mollitia.",rating:2,price:768,location:{city:"Mariupol"},owner:{name:"Gabriella",phone:"710-849-3760",email:"Letha22@yahoo.com"}},{id:"5f689a2c09b16000e9a2f48c",title:"Sit similique cumque dolorem ut voluptatibus velit et dicta architecto.",imgUrl:"/img/apartments/apartment-7.jpg",descr:"Soluta quo et rerum vel. Qui earum inventore. Dolores vero facilis ut mollitia nisi iusto a quis. Nesciunt asperiores dolorum magni qui. Omnis autem nulla cupiditate et rerum et iusto rem.",rating:0,price:2642,location:{city:"Odesa"},owner:{name:"Allan",phone:"982-126-1588",email:"Mikel.Carter@hotmail.com"}},{id:"5f689a2c09b16000e9a2f485",title:"Nihil pariatur eum ab a ducimus nam.",imgUrl:"/img/apartments/apartment-8.jpg",descr:"Quae aliquid odit aut quia. Sed aut sed quis repudiandae est consequatur id quo ut. Molestiae nemo maiores quis deleniti sequi et eaque architecto officia. Molestiae incidunt qui quia. Fugiat id eum totam porro autem.",rating:1,price:3959,location:{city:"Kharkiv"},owner:{name:"Estell",phone:"804-325-1372",email:"Alta_Green@hotmail.com"}},{id:"5f689a2c09b16000e9a2f48b",title:"Adipisci voluptates accusamus officia aut id et ut hic.",imgUrl:"/img/apartments/apartment-9.jpg",descr:"Rerum sed voluptas vero ut rerum at ad. Aliquam unde quia earum perspiciatis reiciendis maxime voluptatem. Officiis et est velit placeat adipisci dolores.",rating:0,price:1165,location:{city:"Kyiv"},owner:{name:"Jacklyn",phone:"375-632-7448",email:"Shakira.Collier@gmail.com"}},{id:"5f689a2c09b16000e9a2f47e",title:"Rerum ut consequatur et adipisci.",imgUrl:"/img/apartments/apartment-10.jpg",descr:"Laboriosam ut nam molestiae. Minus est doloremque et aperiam sunt et. Rem earum illum. Dolor consequatur fugiat.",rating:4,price:1568,location:{city:"Kyiv"},owner:{name:"Giovani",phone:"444-741-7494",email:"Lenna12@gmail.com"}},{id:"5f689a2c09b16000e9a2f488",title:"Aut excepturi sed reiciendis.",imgUrl:"/img/apartments/apartment-11.jpg",descr:"Accusantium tempora dolore autem. Nihil perferendis neque. Dignissimos est quidem quasi sit mollitia. Dolorem suscipit earum recusandae quam. Sunt atque vel dolorem. Quidem in temporibus.",rating:5,price:1555,location:{city:"Odesa"},owner:{name:"Janie",phone:"960-872-6654",email:"Rowena.Beatty@yahoo.com"}},{id:"5f689a2c09b16000e9a2f487",title:"Eligendi vel voluptates perspiciatis.",imgUrl:"/img/apartments/apartment-12.jpg",descr:"Quidem natus sunt. Sunt nobis repudiandae. Id reprehenderit accusantium quasi expedita.",rating:0,price:652,location:{city:"Dnipro"},owner:{name:"Neil",phone:"641-112-1767",email:"Savanah_Kozey@gmail.com"}},{id:"5f689a2c09b16000e9a2f480",title:"Quis nobis eius sint occaecati.",imgUrl:"/img/apartments/apartment-13.jpg",descr:"Exercitationem consequuntur expedita aut neque hic ut ratione. Nulla aut non inventore quod voluptas dolore quod. Doloribus ipsam hic.",rating:2,price:3530,location:{city:"Mariupol"},owner:{name:"Tyrique",phone:"359-552-9767",email:"Brandi88@gmail.com"}},{id:"5f689a2c09b16000e9a2f479",title:"Voluptatibus ea consectetur sed sed quas saepe quo.",imgUrl:"/img/apartments/apartment-14.jpg",descr:"Beatae quaerat esse voluptas laborum id quo perspiciatis. Id debitis totam veritatis nostrum sunt. Laboriosam quis dolorem. Repudiandae hic iure similique blanditiis expedita maiores dignissimos reprehenderit sed.",rating:1,price:3250,location:{city:"Kherson"},owner:{name:"Sean",phone:"605-185-0631",email:"Emmanuel_Pollich5@gmail.com"}},{id:"5f689a2c09b16000e9a2f47a",title:"Tempora laudantium quos sed.",imgUrl:"/img/apartments/apartment-15.jpg",descr:"Debitis aliquid laboriosam optio sequi magnam reiciendis facilis. Earum a id voluptas libero qui. Perspiciatis vero doloribus impedit vel quibusdam.",rating:1,price:3771,location:{city:"Odesa"},owner:{name:"Janet",phone:"382-460-0703",email:"Makenna.Satterfield84@gmail.com"}},{id:"5f689a2c09b16000e9a2f482",title:"Autem saepe est aperiam tempora.",imgUrl:"/img/apartments/apartment-16.jpg",descr:"Quaerat aut ipsam vel. Laudantium dignissimos repellat autem blanditiis velit quidem dignissimos accusantium commodi. Dolor praesentium laudantium voluptatem tempore. Corrupti facilis voluptates id saepe eos repudiandae mollitia. Voluptatem id assumenda sunt at minus.",rating:1,price:2249,location:{city:"Kyiv"},owner:{name:"Noe",phone:"551-479-3150",email:"Jonas.Tromp@yahoo.com"}},{id:"5f689a2c09b16000e9a2f484",title:"Qui omnis magni ad omnis neque.",imgUrl:"/img/apartments/apartment-17.jpg",descr:"Magni qui blanditiis doloribus mollitia laboriosam quibusdam provident. Et et minima quae commodi dicta vel omnis. Numquam nemo laborum ullam perspiciatis tempora.",rating:2,price:2324,location:{city:"Dnipro"},owner:{name:"Aletha",phone:"296-446-0921",email:"Margarita.Durgan34@hotmail.com"}},{id:"5f689a2c09b16000e9a2f489",title:"Possimus iste error harum eum sunt rerum perspiciatis nisi.",imgUrl:"/img/apartments/apartment-18.jpg",descr:"Odio accusantium dicta. Sit minus quo quo. Excepturi est deleniti enim voluptas quis rerum. Libero beatae consequatur. Error nostrum porro quo perspiciatis adipisci.",rating:5,price:605,location:{city:"Lviv"},owner:{name:"Chasity",phone:"738-307-1493",email:"Godfrey.Cormier@gmail.com"}},{id:"5f689a2c09b16000e9a2f486",title:"Saepe autem quam rerum similique enim rerum molestias.",imgUrl:"/img/apartments/apartment-19.jpg",descr:"Reprehenderit velit iusto fugiat possimus animi est rerum. Assumenda minus qui perspiciatis sint veniam culpa quod tempora in. Eligendi qui rerum optio nihil maxime ipsa quaerat voluptas. Quod possimus aut cum inventore quaerat quam. Voluptate ducimus unde ipsa. Id ducimus aut iusto porro.",rating:5,price:2330,location:{city:"Mariupol"},owner:{name:"Bart",phone:"922-384-9740",email:"Chadd_Jacobs28@hotmail.com"}},{id:"5f689a2c09b16000e9a2f483",title:"Ipsum maxime molestiae harum voluptas beatae omnis neque consectetur.",imgUrl:"/img/apartments/apartment-20.jpg",descr:"Sit quo in commodi est ex dicta qui. Dolore minus ea sit voluptatem voluptas non rerum consectetur. Architecto maxime nulla. Et dolorem beatae quidem debitis. Odio ad id atque neque. Neque vero hic quibusdam consequatur perferendis dolor ut.",rating:3,price:1099,location:{city:"Lviv"},owner:{name:"Helmer",phone:"999-690-1616",email:"Concepcion.Cummings32@yahoo.com"}}],E={name:"App",components:{ApartmentsList:N},data(){return{apartments:k,apartment:{id:"5f689a2c09b16000e9a2f47b",title:"Delectus et iste.",imgUrl:"/img/apartments/apartment-1.jpg",descr:"Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.",rating:3.5,price:1667,location:{city:"Dnipro"},owner:{name:"Bobbi",phone:"582-740-2926",email:"Pete_Carter53@hotmail.com"}}}}};const M=(0,l.Z)(E,[["render",n]]);var P=M;(0,a.ri)(P).mount("#app")}},i={};function t(a){var r=i[a];if(void 0!==r)return r.exports;var n=i[a]={exports:{}};return e[a](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(i,a,r,n){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],n=e[c][2];for(var u=!0,m=0;m<a.length;m++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[m])}))?a.splice(m--,1):(u=!1,n<o&&(o=n));if(u){e.splice(c--,1);var s=r();void 0!==s&&(i=s)}}return i}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,r,n]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,a){var r,n,o=a[0],u=a[1],m=a[2],s=0;if(o.some((function(i){return 0!==e[i]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(m)var c=m(t)}for(i&&i(a);s<o.length;s++)n=o[s],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},a=self["webpackChunkvuejs_apartments"]=self["webpackChunkvuejs_apartments"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(663)}));a=t.O(a)})();
//# sourceMappingURL=app.2bc448bb.js.map