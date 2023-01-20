function search() {
  var input, filter, ul, li, i, txtValue;
  input = document.getElementById("myInput");
  selectedId = document.getElementById("selectedId").checked;
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    label = li[i].getElementsByTagName("label")[0];
    txtValue = label.textContent || label.innerText;
    flag = li[i].getElementsByTagName("input")[0].checked;
    if (selectedId == true) {
      if (txtValue.toUpperCase().indexOf(filter) > -1 && flag == true) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    } else {
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}

function clearAll() {
  var ul, li, i;
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    li[i].getElementsByTagName("input")[0].checked = false;
  }
}
