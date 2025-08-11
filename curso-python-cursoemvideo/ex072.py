from time import sleep
cont = ('zero', 'um', 'dois' , 'três', 'Quatro',
        'cinco', 'seis', 'sete', 'oito', 'nove',
        'dez', 'onze', 'doze', 'treze', 'quatorze',
        'quinze', 'dezesseis', 'dezessete', 'dezoito',
        'dezenove', 'vinte')
while True:
        núm = int(input('Digite um número entre 0 e 20: '))
        if 0 <= núm <= 20:
                break
        print('Tente novamente. ', end='')
print(f'Você digitou o número {cont[núm]}')
sleep(1)
while True:
        pergunta = str(input('Deseja continuar [S/N]: ')).strip().upper()[0]
        if pergunta == 'N':
                print('OBRIGADO VOLTE SEMPRE!!!')
                break
        if pergunta == 'S':
                núm = int(input('Digite um número entre 0 e 20: '))
                print(f'Você digitou o  número {cont[núm]}')
