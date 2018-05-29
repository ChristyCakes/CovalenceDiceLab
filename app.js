// Dice Lab -- Class example with jQuery

$(document).ready(function () {

    // create a class called Die
    class Die {

        // use the constructor function with one parameter of 'value'
        constructor(value) {

            // set up value parameter
            this.value = value;

            // create a div for each new object, give it a class name to add border, text alignment, etc in css
            this.div = $('<div></div>').attr("class", "div");
            $(this.div).append(this.value);
            $('.container').append(this.div);

            // when Roll All Dice button is clicked, run the rollAll function (below)
            $('#all').click(() => this.rollAll());

            // when a div is clicked, run rollOne function below
            $(this.div).click(() => this.rollOne());

            // when any div is double clicked, run removeOne function below
            $(this.div).dblclick(() => this.removeOne());

        } // end of constructor func

        // roll all dice again; get random number, replace value in div
        rollAll() {
            this.value = Math.floor(Math.random() * 6 + 1);
            $(this.div).html(this.value);
        }

        // roll the clicked dice again
        rollOne() {
            this.value = Math.floor(Math.random() * 6 + 1);
            $(this.div).html(this.value);
        }

        //remove die that was clicked from display and from sumable dice
        removeOne() {
            $(this.div).remove();
        }

    } // end of class

    // when Add All Dice button is clicked, add value (text) in each div, display sum as alert
    $('#sum').click(function () {
        let sum = 0;
        $('.div').each(function () {
            sum += parseFloat($(this).text());  //parseFloat turns strings into sumable numbers
        })
        alert(sum);
    })

    // Roll 1 Die button generates random number, creates an instance of Die class
    $('#btn').click(function roll() {
        let val = Math.floor(Math.random() * 6 + 1);
        let die = new Die(val);
    })

})   // end of load page -- last of last