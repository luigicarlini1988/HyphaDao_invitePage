document.addEventListener("DOMContentLoaded", function (event) {


    //Slot with dymanic data to fill
    const daoNameSlot = document.getElementById("dao_name")
    const inviterNameSlot = document.getElementById("inviter")
    const memberSlot = document.getElementById("core-members")
    const communitySlot = document.getElementById("community")
    const inviterAvatarSlot = document.getElementById("inviter-avatar")
    const daoLogoSlot = document.getElementById("daologo")
    const qrCodeSlot = document.getElementById("qr-area")

    //here the data that should be taken from blockchain
    const daoName = 'awesomeDAO'
    const inviterName = 'Maria'
    const memberNumber = '384'
    const communityNumber = '4840'
    const inviterAvatar = '<img src="img/avatars/avatar.jpg">'
    const daoLogo = '<img src="img/logos/awesome-logo.png" />'
    const qrCode = '<img src="img/qr-code.png" />'


    //this here are the elemennt used for triggering the 2steps animations
    const acceptButton = document.getElementById("accept-button")
    const stepOne = document.getElementById("step-1")
    const stepTwo = document.getElementById("step-2")
    const backButton = document.getElementById("back")



    //function to fill the data in the slots
    function fillData() {
        daoNameSlot.innerHTML = daoName
        inviterNameSlot.innerHTML = inviterName
        memberSlot.innerHTML = memberNumber
        communitySlot.innerHTML = communityNumber
        inviterAvatarSlot.innerHTML = inviterAvatar
        daoLogoSlot.innerHTML = daoLogo
        qrCodeSlot.innerHTML = qrCode
    }

    fillData()



    //function for the 2 steps animation
    function doSteps() {
        acceptButton.onclick = function () {

            stepOne.classList.add('vanish')
            setTimeout(function () {
                stepTwo.classList.add('appear')
            }, 200);

        }

        backButton.onclick = function () {

            stepTwo.classList.remove('appear')
            setTimeout(function () {
                stepOne.classList.remove('vanish')
            }, 200);


        }

    }

    doSteps()

});