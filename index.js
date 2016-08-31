var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return  "Welcome, " + name+". You are number "+(katzDeliLine.length)+" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!" }
  else {
    var notice =  `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return notice
    }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
  return "The line is currently empty." }
  else {
    var string = "The line is currently:"
    for (var i=0; i< katzDeliLine.length;i++)
    {
      string = string + " "+ (i + 1) + ". " + katzDeliLine[i]
      if ((i+1)!= katzDeliLine.length) {
        string = string + ","
      }
    }
    return string
  }
}
