var student_list = []

function Publish() {

    var student1 = document.getElementById("s1").value
    var student2 = document.getElementById("s2").value
    var student3 = document.getElementById("s3").value
    var student4 = document.getElementById("s4").value

    student_list.push(student1)
    student_list.push(student2)
    student_list.push(student3)
    student_list.push(student4)

    document.getElementById("blank").innerHTML = student_list

}

function order() {


    var student_sort = student_list.sort()

    document.getElementById("blank").innerHTML = student_sort
}
