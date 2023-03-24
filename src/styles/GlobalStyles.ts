import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;



html, body, #root {
   min-height: 100vh;
}

body{
    background-color: #f5f5f5;
}

a:link {
    color: black;
    text-decoration: none;

}

a:visited {
    color: white;
}

a:hover {
    color:white;
}

.relative{
        position: relative;
    }
    .fs-md{
        font-size: 18px !important;
    }
   .p-10 a:nth-child(n){
    padding-bottom: 10px;
   }
   .p-10 a:last-child(){
    padding-bottom: 0px;
   }
   .w-lg-100{
    width: 350px;
    @media(max-width: 991px){
        width: 100%;
    }
   }
   
   .slick-arrow{
    background-color: rgba(0,0,0, 0.7);
    width: 60px;
    height: 60px;
    @media(max-width: 991px){
        display:none !important;
    }

    &:hover{
        background-color: #000;
    }
    &:focus{
        background-color: rgba(0,0,0, 0.7);

        &:hover{
            background-color: #000;
        }
    }
   }

   .slick-next{
        @media(min-width: 992px)
            {
                right: 0;
                z-index: 2;
            }
        right: -70px;
        z-index: 1;
   }

   .slick-prev{
        @media(min-width: 992px)
            {
                left: 0;
                z-index: 2;
            }
        left: -70px;
        z-index: 1;
   }

   .slick-disabled{
        opacity: 0;
   }
   .slick-next:before, [dir=rtl] .slick-prev:before {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color:#ccc;

        font-weight: 700;
    }
    .slick-next:before {
        padding-bottom: 5px;

    }
    .slick-prev:before, [dir=rtl] .slick-prev:before {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: 700;
        color:#ccc;
    }
    .slick-prev:before {
        padding-bottom: 5px;
    }
    .fs-small{
        @media(max-width: 575px){
            font-size: 14px;
        }
    }
    .flex-1{
        flex: 1;
    }
    .slick-dots li.slick-active button:before {
    font-size: 10px;
    color: rgb(45, 103, 127);
    opacity: 1;
    }
    .slick-dots {
       white-space: nowrap;
       overflow: auto;
    }
    .slick-dots li {
        margin: 0;

    }
}
`
