class Slider{
    picture_list=[]
    active_index=0
    constructor(){
        this.picture_list = $('.picture')
    }
    next(){
        if(this.active_index+1>this.picture_list.length-1){
            // active_index=this.picture_list.length-1 //혹은 0으로 되돌아가기
            this.active_index=0
        }else{
            this.active_index++
        }
        $('.picture').removeClass('active')
        $(this.picture_list[this.active_index]).addClass('active')
    }
    prev(){
        if(this.active_index-1<0){
            this.active_index=this.picture_list.length-1
        }else{
            this.active_index = this.active_index-1
        }
        $('.picture').removeClass('active')
        $(this.picture_list[this.active_index]).addClass('active')
    }
}

$(function(){
    let slider = new Slider()
    $('.arrow.left').click(function(){
        slider.prev()
    })

    $('.arrow.right').click(function(){
        slider.next()
    })

    setInterval(function(){
        slider.next()
    },10000)

    $('.slider').on('mouseover',function(){
        $('.arrow').addClass('active')
    })
    
    $('.slider').on('mouseleave',function(){
        $('.arrow').removeClass('active')
    })
})

