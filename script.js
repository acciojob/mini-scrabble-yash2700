//your code here
 let evaluatedText=document.getElementById("evaluatedText")
        let letterCount=document.getElementById("letterCount")

        evaluatedText.addEventListener("input" ,calculatelength)
        function calculatelength(){
           letterCount.innerHTML= evaluatedText.value.length
            document.body.append(letterCount)
        }