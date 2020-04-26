class Cell
{
   constructor(mark_turn)
   {
      this.mark_turn=mark_turn;
      this.place=document.querySelectorAll('.cell')
   }
   
   placemark(location)
   {
      
      this.place[location].classList.add(this.mark_turn) 
   }
}