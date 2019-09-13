function $(id) {
  return document.getElementById(id);
}

//approver btn click


dragula([$('drag-elements'), $('drop-target'), $('drop-target-approver'), $('drop-target-approver-2'), $('drop-target-releaser')], {
  revertOnSpill: false,
  copy: true,
}).on('drop', function(el) {
  // setup
  if ($('drop-target').children.length > 0) {
    $('display').innerHTML = $('drop-target').innerHTML;
  }
  // approver
  if ($('drop-target-approver').children.length > 0) {
    $('display2').innerHTML = $('drop-target-approver').innerHTML;
  }
  
  // approver2
  if ($('drop-target-approver-2').children.length > 0) {
    $('display-app2').innerHTML = $('drop-target-approver-2').innerHTML;
  }
  
  // releaser
  if ($('drop-target-releaser').children.length > 0) {
    $('display3').innerHTML = $('drop-target-releaser').innerHTML;
  }
});

function showDropArea(containerName) {
  if(containerName === 'approver') {
      if(document.getElementsByClassName('approver-container')[0].style.display == 'block') {
         document.getElementsByClassName('approver-container-2')[0].style.display = 'block'
         }
    document.getElementsByClassName('approver-container')[0].style.display = 'block';
    
  } else if(containerName === 'releaser') {
     document.getElementsByClassName('releaser-container')[0].style.display = 'block';
  } else if(containerName === 'setUp') {
    document.getElementsByClassName('setup-container')[0].style.display = 'block';
  }
}


var elem1 = document.getElementById('approver');

function closeContainer(containerName) {
  if(containerName == 'setup-container'){
    document.getElementsByClassName('setup-container')[0].style.display = 'none';
  } else if (containerName== 'approver-container') {
     document.getElementsByClassName('approver-container')[0].style.display = 'none';
  } else if (containerName== 'approver-container-2') {
     document.getElementsByClassName('approver-container-2')[0].style.display = 'none';
  } else if (containerName== 'releaser-container') {
     document.getElementsByClassName('releaser-container')[0].style.display = 'none';
  }  else if (containerName== 'limits') {
     document.getElementsByClassName('limits')[0].style.display = 'none';
  } else if (containerName== 'modal-content') {
     document.getElementsByClassName('modal-content')[0].style.display = 'none';
  } 
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// getSettings Modal
var settingModal = document.getElementById("mySettings");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showModel() {
  modal.style.display = "block";
}

function closeModel() {
  modal.style.display = "none";
}


function showSettingModel() {
  settingModal.style.display = "block";
}

function closeSettingModel() {
  settingModal.style.display = "none";
}

function changeradio(optionName) {
  var selectelem = document.getElementById('selectOption')
  if (optionName === 'Atleast') {
   selectelem.style.display = "block"
  } else {
    selectelem.style.display = "none"
  }
}

