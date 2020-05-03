//survey js file 
class Survey {
    constructor(fm) {
        this.anxiety = fm.anxiety.checked; //has experienced anxiety in the last month
        this.noAnxiety = fm.noAnxiety.checked;
        this.depression = fm.depression.checked; // has experienced depression in the last month
        this.noDepression = fm.noDepression.checked;
        this.death = fm.death.checked; //a loved one has died in the last month
        this.noDeath = fm.noDeath.checked;
    }
}
//return box text 
this.suggestion = function() {
    if (this.anxiety && this.depression && this.death) {
        return "You might benefit from speaking with a counselor immediately. Are you available to chat with one now?";
    }

// process form
function process_form() {
    var fm = document.getElementById("my_form");
    var out = document.getElementById("output");
    
    
    var counselor = new Counselor (fm); 
    //out.style.background = book.order ();
    out.innerHTML = counselor.suggestion ();
}