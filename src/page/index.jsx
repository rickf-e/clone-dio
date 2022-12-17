import { useState, useCallback, useMemo } from 'react'

const Teste = () => {
    const [name, setName] = useState('Paulo')
    const [age, setAge] = useState(26)

    // useMemo = referência em variáveis
    // useCallBack = referência de função

    const handleChangeName = useCallback(() => {
        setName(prev => prev == 'Paulo' ? 'Henrique' : 'Paulo')
    }, [])

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age
        console.log('Age atual =>', age, newAge)
        setAge(prev => prev == 26 ? 32 : 26)
    }, [age])

    return(
        <div>
            <p>
                Idade: {age}
            </p><br />
            <p>
                Nome: {name}
            </p>
            <button onClick={handleChangeName}>Alterar Nome</button>
            <button onClick={handleChangeAge}>Alterar Idade</button>
        </div>
    )
}

export { Teste }