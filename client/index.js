const button = document.getElementById("btn")
const namee = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")


button.addEventListener("click", async () => {
    try {

        const body = new FormData()
        body.append("name", namee.value)//this makes an object with all the stuff we will make connect to server 
        body.append("phone", phone.value)
        body.append("email", email.value)
        body.append("message", message.value)


        const response = await fetch("http://localhost:5000/work", {
            method: "POST",
            headers: { "Content-type": "multipart/form-data" },
            body: body
        })

        console.log("work")
        alert("you message has been recieved")
    } catch (error) {
        console.log(error)
    }
})