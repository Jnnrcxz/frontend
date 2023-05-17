const form = document.getElementById("form_sentence");
if (form) {
    form.onsubmit = async function (e){
        e.preventDefault();

        const formData = new FormData(form);

        let sentence = formData.get("sentence"); 
        if (sentence.length <= 5) {
           alertMessage("error","Invalid Input");

            return;
        }
       //console.log(formData.get("sentence")); 
        const response = await window.axios.openAI(formData.get("sentence"));
        document.getElementById("sentence_corrected").innerHTML = JSON.stringify(response.choices[0].text).replace(/\\n/g, '');
        };
    }

    function alertMessage(status, sentence){
        window.Toastify.showToast({
            text: sentence,
            duration: 5000,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: status == "error" ? "linear-gradient(to right, pink, blue)" : "green",
                textAlign: "center",
                padding: "5px",
                marginTop: "5px",
                color: "white",
                
         }
        });
    }
