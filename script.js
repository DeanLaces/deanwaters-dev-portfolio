
document.body.classList.add('disable-scrolling')
let player = document.querySelector('#player');

let moveBy = (window.innerHeight + window.innerWidth) / 40;
var univ_screen = document.querySelector('html');
var current_scene = "sceneOne";

let github_url_one = 'https://github.com/DeanLowell/webscraping'
let github_url_two = 'https://github.com/DeanLowell'
let github_url_three = 'https://github.com/DeanLowell/learning-programming'





var asteroid_one_x = (window.innerWidth/4+"px");
var asteroid_one_y = (window.innerHeight/4+"px");

player.style.left = window.innerWidth /2+"px";
player.style.top = window.innerHeight/2+"px";


const body = document.getElementById('body');

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.globalAlpha = 0.0;




window.addEventListener('load', () => {
    player.style.position = 'absolute';
    
});



window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
           player.style.left = parseInt(player.style.left) - moveBy + 'px';
          
            break;
        case 'ArrowRight':
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
         
            break;
        case 'ArrowUp':
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
        
            break;
        case 'ArrowDown':
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
           
            break;
        
    }


    
});



function scrollingScene(scene)
{
  
    var player_rect = player.getBoundingClientRect();

 

    switch(scene)
    {
        case 'sceneOne':
            document.querySelector('#left_arrow').style.visibility = 'visible';
            document.querySelector('#down_arrow').style.visibility = 'visible';
            document.querySelector('#up_arrow').style.visibility = 'visible';
            document.querySelector('#right_arrow').style.visibility = 'visible';
            document.querySelector('#asteroid_one').style.visibility = 'visible';
            document.querySelector('#keys').style.visibility = 'visible';

            if(player_rect.x < -20)
                {
                document.querySelector('#asteroid_one').style.visibility = 'hidden';
                document.querySelector('#keys').style.visibility = 'hidden';

                document.querySelector('#left_arrow').style.visibility = 'hidden';
                document.querySelector('#down_arrow').style.visibility = 'hidden';
                document.querySelector('#up_arrow').style.visibility = 'hidden';

                player.style.left = (window.screen.width /2)+"px";
                player.style.top= (window.screen.height/2) + "px"; 
                univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_two.png' + ')';
                current_scene = 'sceneTwo'
       
                }

            if(player_rect.y < 0)
            {
                document.querySelector('#asteroid_one').style.visibility = 'hidden';
                document.querySelector('#keys').style.visibility = 'hidden';

                document.querySelector('#left_arrow').style.visibility = 'hidden';
                document.querySelector('#up_arrow').style.visibility = 'hidden';
                document.querySelector('#right_arrow').style.visibility = 'hidden';

                player.style.left = (window.screen.width /2)+"px";
                player.style.top= (window.screen.height/2) + "px"; 
                univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_three.png' + ')';
                current_scene = 'sceneThree'
            }

            if(player_rect.x > (window.innerWidth -150))
            {
                document.querySelector('#asteroid_one').style.visibility = 'hidden';
                document.querySelector('#keys').style.visibility = 'hidden';

                document.querySelector('#right_arrow').style.visibility = 'hidden';
                document.querySelector('#down_arrow').style.visibility = 'hidden';
                document.querySelector('#up_arrow').style.visibility = 'hidden';
                

                player.style.left = (window.screen.width /2)+"px";
                player.style.top= (window.screen.height/2) + "px"; 
                univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_four.png' + ')';
                current_scene = 'sceneFour'
            }

            if(player_rect.y > (window.innerHeight -100))
            {
                document.querySelector('#asteroid_one').style.visibility = 'hidden';
                document.querySelector('#keys').style.visibility = 'hidden';

                document.querySelector('#left_arrow').style.visibility = 'hidden';
                document.querySelector('#right_arrow').style.visibility = 'hidden';
                document.querySelector('#down_arrow').style.visibility = 'hidden';
                

                player.style.left = (window.screen.width /2)+"px";
                player.style.top= (window.screen.height/2) + "px"; 
                univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_five.png' + ')';
                current_scene = 'sceneFive'
            }

            break;
        
    case 'sceneTwo':
        if(player_rect.x > ( window.innerWidth - 150))
        {
                player.style.left = (window.innerWidth /2)+"px";
                player.style.top= (window.innerHeight/2) + "px"; 
                univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_one.png' + ')';
                document.querySelector('#asteroid_one').style.visibility = 'visible';
                document.querySelector('#keys').style.visibility = 'visible';
                current_scene = 'sceneOne'
        }

        if(player_rect.x < 0)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px"; 
        }

        if(player_rect.y > window.innerHeight - 100)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }

        if(player_rect.y < 0)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
        break;
    case 'sceneThree':
        if(player_rect.x > ( window.innerWidth - 150))
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
            
        if(player_rect.x < 0)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px"; 
        }

        if(player_rect.y > window.innerHeight - 100)
        {
                    player.style.left = (window.innerWidth /2)+"px";
                    player.style.top= (window.innerHeight/2) + "px"; 
                    univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_one.png' + ')';
                    document.querySelector('#asteroid_one').style.visibility = 'visible';
                    document.querySelector('#keys').style.visibility = 'visible';
                    current_scene = 'sceneOne'
        }

        if(player_rect.y < 0)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
        break;


    case 'sceneFour':
        if(player_rect.x > ( window.innerWidth - 150))
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
            
        if(player_rect.x < 0)
        {
            player.style.left = (window.innerWidth /2)+"px";
            player.style.top= (window.innerHeight/2) + "px"; 
            univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_one.png' + ')';
            document.querySelector('#asteroid_one').style.visibility = 'visible';
            document.querySelector('#keys').style.visibility = 'visible';
            current_scene = 'sceneOne' 
        }

        if(player_rect.y > window.innerHeight - 100)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }

        if(player_rect.y < 0)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
        break;


    case 'sceneFour':
        if(player_rect.x > ( window.innerWidth - 150))
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
            
        if(player_rect.x < 0)
        {
            player.style.left = (window.innerWidth /2)+"px";
            player.style.top= (window.innerHeight/2) + "px"; 
            univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_one.png' + ')';
            document.querySelector('#asteroid_one').style.visibility = 'visible';
            document.querySelector('#keys').style.visibility = 'visible';
            current_scene = 'sceneOne' 
        }

        if(player_rect.y > window.innerHeight - 100)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }

        if(player_rect.y < 0)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
        break;

   
    case 'sceneFive':
        if(player_rect.x > ( window.innerWidth - 150))
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }
            
        if(player_rect.x < 0)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }

        if(player_rect.y > window.innerHeight - 100)
        {
            player.style.left = (window.screen.width /2)+"px";
            player.style.top= (window.screen.height/2) + "px";
        }

        if(player_rect.y < 0)
        {
            player.style.left = (window.innerWidth /2)+"px";
            player.style.top= (window.innerHeight/2) + "px"; 
            univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_one.png' + ')';
            document.querySelector('#asteroid_one').style.visibility = 'visible';
            document.querySelector('#keys').style.visibility = 'visible';
            current_scene = 'sceneOne' 
        }
        break;
        }
    


    
}

function checkOutOfBounds(player)
{
    var player_rect = player.getBoundingClientRect();
    if(player_rect.x > ( window.innerWidth - 150))
    {
        player.style.left = (window.screen.width /2)+"px";
      
    }
        
    if(player_rect.x < 0)
    {
        player.style.left = (window.innerWidth /6)+"px";
   
    }

    if(player_rect.y > window.innerHeight - 100)
    {
       
        player.style.top= (window.screen.height/2) + "px";
    }

    if(player_rect.y < 0)
    {
       
        player.style.top= (window.screen.height/2) + "px";
    }

}

function load_new_planet(planet)
{
    var intervalId = window.setInterval(function()
    {
     
        checkOutOfBounds(player);
      }, 500);

    var quequed = true;
    switch(planet)
    {
        case 'mars':

                document.querySelector('#asteroid_one').style.visibility = 'hidden';
                document.querySelector('#keys').style.visibility = 'hidden';

                document.querySelector('#left_arrow').style.visibility = 'hidden';
                document.querySelector('#down_arrow').style.visibility = 'hidden';
                document.querySelector('#up_arrow').style.visibility = 'hidden';
                document.querySelector('#right_arrow').style.visibility = 'hidden';

                



                player.style.left = (window.screen.width /6)+"px";
                player.style.top= (window.screen.height/ 1.5) + "px"; 
                univ_screen.style.backgroundImage= 'url(' + 'img/scenes/mars.png' + ')';
                univ_screen.style.zIndex =0;
                current_scene = 'mars'


                let h_1_x = window.innerWidth/24
                let h_2_x =  window.innerWidth/14
                let h_3_x = window.innerWidth/9
                let h_4_x = window.innerWidth/8
                
                let h_1_y = innerHeight/9
                let h_2_y = window.innerHeight/9
                let h_3_y = window.innerHeight/9
                ctx.beginPath();
                
                

                const h_box_one = ctx.rect(h_1_x,h_1_y,20,20);
                const h_box_three = ctx.rect(h_3_x,h_3_y ,20,20);
                const h_box_two = ctx.rect(h_2_x ,h_2_y,20,20);
               

                ctx.stroke();

               
                

                

                var intervalId = window.setInterval(function()
                {

                    window.addEventListener('keydown', (e) => 
                {
                    
                    switch(e.key)
                    {
                        
                        case 'q':
                            
                            current_scene= 'sceneOne';
                            player.style.left = (window.innerWidth /2)+"px";
                            player.style.top= (window.innerHeight/2) + "px"; 
                            univ_screen.style.backgroundImage= 'url(' + 'img/scenes/scene_one.png' + ')';
                            
                        break;
                            
                         
                        
                    }
                    
                },{once:true});

                try{
                    
                    if(Math.abs(parseInt(player.style.left)/5.5 - h_1_x) < 20 && 
                    Math.abs(parseInt(player.style.top)/5.5 - h_1_y) < 20)
                    {
                        
                        window.addEventListener('keydown', (e) => 
                {
                    
                    switch(e.key)
                    {
                        case 'z':
                            window.open(github_url_one, '_blank');
                    }
                    
                },{once:true});
                        

                    }

                    if(Math.abs(parseInt(player.style.left)/5.5 - h_2_x) < 20&& 
                    Math.abs(parseInt(player.style.top)/5.5 - h_2_y) < 20)
                    {
                        window.addEventListener('keydown', (e) => 
                {
                    
                    switch(e.key)
                    {
                        case 'z':
                            window.open(github_url_two, '_blank');
                    }
                    
                },{once:true});
                    }

                    if(Math.abs(parseInt(player.style.left)/5.5 - h_3_x) < 20&& 
                    Math.abs(parseInt(player.style.top)/5.5 - h_3_y) < 20)
                    {
                        window.addEventListener('keydown', (e) => 
                {
                    
                    switch(e.key)
                    {
                        case 'z':
                            window.open(github_url_three, '_blank');
                    }
                    
                },{once:true});
                    }

                    
                    
                    

                }
                catch(err)
                {
                    console.log("Expected erorr" + err + " please continue!");
                }
                  }, 500);

                
                
    }
}


function checkCollision()
{
    
    var player_rect = player.getBoundingClientRect();

    if(current_scene == 'sceneOne')
    {
        if(Math.abs(player_rect.x - parseInt(asteroid_one_x)) < 100 || 
    Math.abs(player_rect.y - parseInt(asteroid_one_y)) < 100)
    {

       
        document.getElementById("enter").style.visibility = "visible";

        window.addEventListener('keydown', (e) => 
                {
                    switch(e.key)
                    {
                        case 'Enter':
                            document.getElementById("enter").style.visibility = "hidden";
                            current_scene= 'mars';
                            load_new_planet('mars');
                        break;
                            
                         
                        
                    }
                    
                },{once:true});

                

   


    }

    else
    {
        document.getElementById("enter").style.visibility = "hidden";
    }
    }

}


var intervalId = window.setInterval(function(){
    checkCollision();
    scrollingScene(current_scene);
  }, 500);
