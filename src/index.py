def calculoVitorias(vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas
    return saldo_vitorias

rank = calculoVitorias(20, 5)
nivel = "Ferro"

if rank <= 10:
    nivel = "Ferro"
elif 10 < rank <= 20:
    nivel = "Bronze"
elif 20 < rank <= 50:
    nivel = "Prata"
elif 50 < rank <= 80:
    nivel = "Ouro"
elif 80 < rank <= 90:
    nivel = "Diamante"
elif 90 < rank <= 100:
    nivel = "Lendário"
else:
    nivel = "Imortal"

print("O Herói possui um saldo de {} e está no nível {}. ".format(rank, nivel))
