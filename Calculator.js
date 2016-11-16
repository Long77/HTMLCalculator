document.head.innerHTML += `<style>

body {
	color: white;
}

</style>`

const app = () => {
    const React = react,
        DOM = reactDom
    
    class Calculator extends React.Component {
        handle(e, i){
            e.preventDefault()
            log(`${i}`)
        }
        render(){
            return <div>
                {new Array(10).fill(1).map((x,i) =>
                    <div 
                 		onClick={e => this.handle(e,i)}>
                        {i}
                    </div>
                )}
            </div>
        }
        calculate(e, i){
            e.preventDefault()
            log('')


        }
    }

    
    DOM.render(<Calculator />, document.body)
}

require('react', 'react-dom').then(app)