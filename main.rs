use num_bigint::BigUint;
use num_traits::{One, Zero};

// Função que calcula o fatorial de forma recursiva
fn fatorial(n: u32) -> BigUint {
    let mut res = BigUint::one();
    for i in 1..=n {
        res *= i;
    }
    res
}

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

// Função exportada para o WASM
#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
pub fn calcular_fatorial_wasm(n: u32) -> String {
    fatorial(n).to_string()
}

#[cfg(not(target_arch = "wasm32"))]
fn main() {
    let n = 100_000;
    let resultado = fatorial(n);
    println!("Fatorial de {} é: {}", n, resultado);
}
