from random import choice
n1 = str(input('Primeiro aluno: '))
n2 = str(input('Segundo alunno: '))
n3 = str(input('Terceiro aluno: '))
n4 = str(input('Quarto alono: '))
lista = [n1, n2, n3, n4]
escolhido = choice(lista)
print('O aluno escolhido foi {}'.format(escolhido))
