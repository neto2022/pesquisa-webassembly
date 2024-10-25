import time
import subprocess
import psutil

arr = [
    "wasm10x10.js",
    "JS10x10.js",
    "wasm5x5.js",
    "JS5x5.js",
    "wasm2x2.js",
    "JS2x2.js",
]

resultados_media = []
memorias_media = []


# Função para executar o script e medir o tempo e o uso de memória
def executar_script(item):
    tempos = []
    memorias = []

    for _ in range(5):  # Executa 5 vezes
        process = subprocess.Popen(["node", item])
        pid = process.pid
        inicio = time.perf_counter()

        mem_total = 0  # Para somar o uso de memória
        count = 0  # Contador de medições de memória

        while process.poll() is None:
            try:
                p = psutil.Process(pid)
                mem_usage = p.memory_info().rss / (1024 * 1024)  # Em MB
                mem_total += mem_usage
                count += 1
                print(f"Uso de memória: {mem_usage:.8f} MB")
                time.sleep(0.1)
            except psutil.NoSuchProcess:
                break

        fim = time.perf_counter()
        tempo_total = (fim - inicio) * 1000  # Converte de segundos para milissegundos
        tempos.append(tempo_total)

        # Calcula a média de uso de memória para essa execução
        if count > 0:
            media_memoria = mem_total / count
            memorias.append(media_memoria)

        print(f"Tempo de execução: {tempo_total:.4f} ms {item}\n")

    # Calcula a média dos tempos e da memória
    media_tempo = sum(tempos) / len(tempos)
    media_memoria_geral = sum(memorias) / len(memorias) if memorias else 0
    return media_tempo, media_memoria_geral


# Executa cada script e calcula as médias
for item in arr:
    media_tempo, media_memoria = executar_script(item)
    resultados_media.append(media_tempo)
    memorias_media.append(media_memoria)

# Compara os resultados entre pares
for i in range(0, len(resultados_media), 2):
    if i < len(resultados_media) - 1:
        diferenca_tempo = resultados_media[i] - resultados_media[i + 1]
        print(f"{arr[i]}  -  {arr[i + 1]} {diferenca_tempo:.4f} ms")

# Mostra as médias de tempo e memória para cada script
for i in range(len(arr)):
    print("\n")
    print(
        f"{arr[i]} memória usada média: {memorias_media[i]:.8f} MB e tempo médio: {resultados_media[i]:.4f} ms"
    )
