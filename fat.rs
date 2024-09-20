fn factorial(number: i128) -> i128 {
    let mut factorial: i128 = 1;
    for i in 1..=number {
        factorial *= i;
    }
    factorial
}

fn main() {
    let number: i128 = 5;
    println!("Fatorial de {} é: {}", number, factorial(number));
}