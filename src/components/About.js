import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState( 
    //     {
    //         color:'black' ,
    //         backgroundColor:'white',
    //         border:'1px solid black'      
    //       }
    // )



    // const toggleStyle=()=>
    // {
    //     if(myStyle.color==='black')
    //     {
    //         setmyStyle({
    //              color:'white',
    //              backgroundColor:'black'}
    //         )
    //         setbtnText("Use Light Mode")
    //     }
    //     else
    //         {
    //             setmyStyle({
    //                     color:'black',
    //                     backgroundColor:'white'}
    //             )
    //             setbtnText("Use Dark Mode")
    //         }
        
    // }
    // const [btnText, setbtnText] = useState("Use Dark Mode")
    
  return (
    
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <h1 className='my-3'> About Us</h1>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Introducing My TextUtils Application using React </strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <strong>TextUtils: Your Ultimate Text Manipulation Tool </strong>- TextUtils is a fast, efficient, and reliable tool for manipulating text. With features like text upperCase to lowerCase and vice-versa, space removal, word count and more, it's the perfect solution for formatting text quickly and accurately. Built with React, TextUtils has a dynamic and responsive user interface that updates seamlessly in real-time. Optimized for speed and efficiency, it can handle large amounts of text and complex operations without slowing down. Whether you're a writer, editor, or just need to work with text regularly, TextUtils is the ultimate text manipulation tool.
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Credits and Acknowledgements </strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        TextUtils was created by Sourav Kumar Das inspired by the teachings of Code with Harry React tuitorials. I would like to thank Harry bhai and his team for creating such comprehensive and engaging tutorials on React and web development.  Finally, I would like to acknowledge the open-source community for providing us with a wealth of resources and inspiration. We are grateful for the opportunity to create this application and share it with the world.
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Responsive and Free to Use</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        It's worth noticing the importance of having a tool that is accessible from any device. That's why I have designed TextUtils to be fully responsive, meaning it can be used on any device size. Whether you're using a desktop computer, a tablet, or a mobile phone, TextUtils will adjust to fit your screen size and provide you with a seamless and comfortable user experience. Try it out on your favorite device and see how TextUtils can help you format and manipulate your text with ease. It's 100% free to use application with no ads.
        </div>
        </div>
        </div>
        {/* <div className="container my-2">
        <button type="button" class="btn btn-primary" onClick={toggleStyle} style={myStyle}>{btnText}</button>
        </div> */}
        </div>

    </div>
         
  
    
   
  )
}
