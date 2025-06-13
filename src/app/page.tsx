const fullTime = new Intl.DateTimeFormat("pt-br", {
  timeStyle: "short",
  hour12: false
}).format(new Date());

const hour = new Date().getHours()

export default function home () {
    return(
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col w-screen h-screen justify-center items-center text-white">
            
                <div>
                    <p className= "text-9xl font-bold">{fullTime}</p>
                    <p className= "text-5xl font-bold">
                        {hour >= 12 && hour < 18 && "Boa tarde!"}
                        {hour >= 18 && hour <= 24 && "Boa noite!"}
                        {hour < 12 && "Bom dia!"} 
                    </p>    
                </div>
                
        </div>
    )
}