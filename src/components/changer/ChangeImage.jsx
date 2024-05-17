import React from 'react';

function ChangeImage() {

    let displayImage = document.getElementById('image')

    if(displayImage.src.match('assets/img/plates/Plate1.gif')) {
        displayImage.src = 'assets/img/plates/Plate2.gif'
    } else {
        if(displayImage.src.match('assets/img/plates/Plate2.gif')) {
            displayImage.src = 'assets/img/plates/Plate3.gif'
        } else {
            if(displayImage.src.match('assets/img/plates/Plate3.gif')) {
                displayImage.src = 'assets/img/plates/Plate4.gif'
            } else {
                if(displayImage.src.match('assets/img/plates/Plate4.gif')) {
                    displayImage.src = 'assets/img/plates/Plate5.gif'
                } else {
                    displayImage.src = 'assets/img/plates/Plate1.gif'
                }
            }
        }
    }

}               

export default ChangeImage;
