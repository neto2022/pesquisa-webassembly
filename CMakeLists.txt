cmake_minimum_required(VERSION 3.15)
project(MeuProjeto C)

# Defina o padrão de compilação como C99
set(CMAKE_C_STANDARD 99)

# Incluir pacotes gerenciados pelo Conan
include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
conan_basic_setup()

# Adicionar arquivos fonte
add_executable(meu_executavel src/fatorial.c)
