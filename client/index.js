
document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("btn")
    const namee = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const message = document.getElementById("message")


    button.addEventListener("click", async (event) => {
        try {
            event.preventDefault()
            const body = {
                name: namee.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            }  // because ima make form data not json remove the line below we need to switch to json instead of multipart form data


            const response = await fetch("http://localhost:5000/work", {
                method: "POST",

                body: JSON.stringify(body)
            })
            console.log("work")

            namee.value = "",
                email.value = "",
                phone.value = "",
                message.value = ""



            alert("you message has been recieved")
        } catch (error) {
            console.log(error)
        }
    })
})