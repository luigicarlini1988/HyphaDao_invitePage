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



    //this here are the elemennt used for triggering the 2steps animations
    const acceptButton = document.getElementById("accept-button")
    const stepOne = document.getElementById("step-1")
    const stepTwo = document.getElementById("step-2")
    const stepThree = document.getElementById("step-3")
    const stepZero = document.getElementById("step-zero")
    const backButton = document.getElementById("back")

    //qr code stuf
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const url = urlParams.get('url')


    if (queryString) {

        //qr code generator
        const qrcode = new QRCode(document.getElementById('qr-area'), {
            text: url,
            width: 500,
            height: 500,
            colorDark: '#F4F8FB',
            colorLight: '#17294A',
            correctLevel: QRCode.CorrectLevel.H
        });

        stepOne.classList.remove('pre')

    }


    if (!queryString) {

        stepOne.style.display = "none";
        stepZero.classList.add('appear')

    }






    //function to fill the data in the slots
    function fillData() {
        daoNameSlot.innerHTML = daoName
        inviterNameSlot.innerHTML = inviterName
        memberSlot.innerHTML = memberNumber
        communitySlot.innerHTML = communityNumber
        inviterAvatarSlot.innerHTML = inviterAvatar
        daoLogoSlot.innerHTML = daoLogo
    }

    fillData()



    //function for the 3 steps animation
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

        qrCodeSlot.onclick = function () {

            stepTwo.classList.add('vanish')
            setTimeout(function () {
                stepThree.classList.add('appear')
            }, 200);


        }

    }

    doSteps()




});