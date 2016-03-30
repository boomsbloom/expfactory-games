uniqueId = 12
url = "/local/483/"
var expfactory = new ExpFactory(uniqueId)
this.data = {}

function inputData(field, value) {
  this.data[field] = value
}

function sendData(trial) {
  inputData('trial', trial)

  expfactory.recordTrialData(data)

  expfactory.djstatus = "UPDATE"
  $.ajax({ type: "POST",
  contentType: "application/json",
  url : url,
  data : JSON.stringify(expfactory),
  dataType: "json",
  success: function(data) {
    console.log("data update called")
    }
  })

  this.data = {}
}
