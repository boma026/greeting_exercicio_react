type RatingProps = {
   rate: number;
}

/*export const Ratings = ({rate}: RatingProps) => {
   if (rate > 5)
      rate = 5;

   if (rate < 0)
      rate = 0;
 
   const inteiro = Math.floor(rate);
   const emoji:string = "😊".repeat(inteiro) + "☹️".repeat(5 - inteiro)
 
   return( 
      <>
         <div className="flex flex-row justify-center">
            <div className="h-14 w-14 bg-gray-400 text-white flex justify-center items-center ">
               <div className="font-bold text-3xl">{rate.toFixed(1)}</div>
            </div>
            <div className=" flex items-center">
               <p className="font-bold text-3xl">{emoji}</p>
            </div>
         </div>
         
      </>       
   )
}
*/ //FORMA FÁCIL


export const Ratings = ({rate}: RatingProps) => {
   if (rate > 5)
      rate = 5;

   if (rate < 0)
      rate = 0;
 
   const inteiro = Math.floor(rate);
   let emoji = ""

   if(inteiro === 1){
      emoji = "☹️";
   }   
   if(inteiro === 2){
      emoji = "🙁";
   }   
   if(inteiro === 3){
      emoji = "😐";
   }   
   if(inteiro === 4){
      emoji = "🙂";
   }   
   if(inteiro === 5){
      emoji = "😁";
   }   

   emoji = emoji.repeat(inteiro) + "👀".repeat(5 - inteiro)
 
   return( 
      <>
         <div className="flex flex-row justify-center">
            <div className="h-14 w-14 bg-gray-400 text-white flex justify-center items-center ">
               <div className="font-bold text-3xl">{rate.toFixed(1)}</div>
            </div>
            <div className=" flex items-center">
               <p className="font-bold text-3xl">{emoji}</p>
            </div>
         </div>
         
      </>       
   )
}
    