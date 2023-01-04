var sinhvien = []
var open = -1
  // luu tru du lieu
var json = localStorage.getItem('stdList')
if(json != null && json != '') {
    sinhvien = JSON.parse(json)

    show()
}
 // them du lieu
$('#MyForm').submit(function() {
    console.log('okok')
    var inputten = $('#inputten').val()
    var inputtuoi = $('#inputtuoi').val()
    var inputlop = $('#inputlop').val()
    var inputmasv = $('#inputmasv').val()
    var inputdiachi = $('#inputdiachi').val()

    var std = {
        'inputten': inputten,
        'inputtuoi': inputtuoi,
        'inputlop': inputlop,
        'inputmasv': inputmasv,
        'inputdiachi':inputdiachi,
    }
    
    if(open >= 0) {
        sinhvien[open] = std;
        open = -1
    } else {
        sinhvien.push(std)
    }

    show()

})
// edit du lieu
function editStudent(index) {
    open = index

    var std = sinhvien[index]

    $('#inputten').val(std.inputten)
    $('#inputtuoi').val(std.inputtuoi)
    $('#inputlop').val(std.inputlop)
    $('#inputmasv').val(std.inputmasv)
    $('#inputdiachi').val(std.inpudiachi)
}
// xoa du lieu
function deleteStudent(index) {
    var option = confirm 
    if(!option) return

    sinhvien.splice(index, 1)
    
    show()
}
// hien thi du lieu
function show() {
    
    $('#danhsach').empty()
    
    for (var i = 0; i < sinhvien.length; i++) {
        $('#danhsach').append(`<tr>
        <td>${i+1}</td>
        <td>${sinhvien[i].inputten}</td>
        <td>${sinhvien[i].inputtuoi}</td>
        <td>${sinhvien[i].inputmasv}</td>
        <td>${sinhvien[i].inputlop}</td>
        <td>${sinhvien[i].inputdiachi}</td>
        <td >
            <button class="btn btn-success" demo2" onclick="chitietStudent()">Chi tiết</button>
            <button class="btn btn-primary demo1" onclick="editStudent(${i})">Sửa</button>
            <button class="btn btn-danger demo" onclick="deleteStudent(${i})">Xóa</button>
        </td>
        
        </tr>`)
    }

    var json = JSON.stringify(sinhvien)

    localStorage.setItem('stdList', json)
}