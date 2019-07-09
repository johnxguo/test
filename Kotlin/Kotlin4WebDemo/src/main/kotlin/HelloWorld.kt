package demo1

import kotlin.browser.document
import kotlin.js.Date


fun say() {
    println("Hello,World1")
}

fun getDate(n: Int): Date {
    var d = Date()
    var ntime = d.getTime() + n * 24 * 3600 * 1000 // ms
    return Date(ntime)
}

fun renderTable() {
    val e = document.getElementById("title")
    e?.innerHTML = """
        <h1>Kotlin VS. JavaScript1</h1>
    """.trimIndent()
}

fun  addTest() {
    val e = document.getElementById("users")
    e?.innerHTML = """
        <h1>Test</h1>
    """.trimIndent()
}


fun main(args: Array<String>) {
}