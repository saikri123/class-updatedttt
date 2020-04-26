class Board
{
    constructor(hover_player)
        {
            this.hover_player=hover_player
            this.hover_mark=document.getElementById('board');
        }
        hoverturn()
        {
            this.hover_mark.classList.remove('xhover');
            this.hover_mark.classList.remove('circlehover');
           
            this.hover_mark.classList.add(this.hover_player);  
            
        }
}