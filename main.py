import time
import subprocess
import psutil

arr = [
    "wasm10x10.js",
    "bench10x10.js",
    "wasm5x5.js",
    "bench5x5.js",
    "wasm2x2.js",
    "bench2x2.js",
]
resultados = []

for item in arr:
    # Inicia o processo do script externo
    process = subprocess.Popen(["node", item])

    # Grava o PID do processo
    pid = process.pid

    # Inicia a medição do tempo
    inicio = time.perf_counter()

    # Aguarda o término do processo e mede o uso de memória
    while process.poll() is None:
        try:
            # Obtem o processo pelo PID
            p = psutil.Process(pid)
            # Obtem o uso de memória do processo
            mem_usage = p.memory_info().rss / (1024 * 1024)  # Em MB
            print(f"Uso de memória: {mem_usage} MB")
            time.sleep(0.1)  # Aguarda um pouco para não sobrecarregar o sistema
        except psutil.NoSuchProcess:
            break

    # Grava o tempo final
    fim = time.perf_counter()

    # Calcula o tempo total decorrido
    tempo_total = fim - inicio
    resultados.append(tempo_total)
    print(f"Tempo de execução: {tempo_total} segundos {item}\n")
i = 0
for item in enumerate(resultados):
    if i < len(resultados) - 1:
        print(arr[i], " - ", arr[i + 1], resultados[int(i)] - resultados[int(i) + 1])
        i = i + 2
