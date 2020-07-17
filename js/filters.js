function ebscoPreProcessCustom(myForm) {
    myForm.bquery.value = myForm.search_prefix.value + myForm.uquery.value + document.customform.hiddenirs.value;
};

//choice filter
function choiceFilter() {
    option1 = document.forms["customform"].elements["option_filter"];
    if (option2 == "youChoice") {
        option1[0].checked = true;
    } else if (option2 == "") {
        option1[2].checked = true;
    } else {
        option1[1].checked = true;
    }
};

//Multi Filter
var objMultiRepo = {};

objMultiRepo.funcFilter = function multiFilter() {
    var contentFilter,
        valsRepository = [],
        option_filter = document.forms['customform']['option_filter'];
    for (var i = 0, elm; elm = option_filter[i]; i++) {
        if (elm.checked) {
            valsRepository.push(elm.value);
        }
    }
    contentFilter = valsRepository.join(' OR ');

    if (contentFilter === '') {
        document.customform.hiddenirs.value = '';
    } else {
        document.customform.hiddenirs.value = ' AND (' + contentFilter + ')';
    }
};

/**choice filter 1 starts here*/
const option = new Event("click");
const buttonOption = document.getElementById("option_filter_1");

buttonOption.addEventListener("click", function (event) {
    var repo = objMultiRepo.funcFilter();
    return repo;
}, false);

buttonOption.dispatchEvent(option);
/**choice filter 1 ends here*/

/**choice filter 2 starts here*/
const option2 = new Event("click");
const buttonOption2 = document.getElementById("option_filter_2");

buttonOption2.addEventListener("click", function (event) {
    var repo2 = objMultiRepo.funcFilter();
    return repo2;
});

buttonOption2.dispatchEvent(option2);
/**choice filter 2 ends here*/

/**choice filter 3 starts here*/
const option3 = new Event("click");
const buttonOption3 = document.getElementById("option_filter_3");

buttonOption3.addEventListener("click", function (event) {
    var repo3 = objMultiRepo.funcFilter();
    return repo3;
});

buttonOption3.dispatchEvent(option3);
/**choice filter 3 ends here*/
/**choice filter 4 starts here*/
const option4 = new Event("click");
const buttonOption4 = document.getElementById("option_filter_4");

buttonOption4.addEventListener("click", function (event) {
    var repo4 = objMultiRepo.funcFilter();
    return repo4;
});

buttonOption4.dispatchEvent(option4);
/**choice filter 4 ends here*/