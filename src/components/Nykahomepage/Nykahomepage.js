import React from "react";
function Nykahomepage(){
    // js code
// creating array
  // creating array for images
  const images=["https://images-static.nykaa.com/uploads/73de78c8-5c0d-434b-87a9-c9e662e67751.jpg?tr=w-180,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/c44a7315-b81b-47a1-8a23-47ee01eded98.jpg?tr=w-180,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/60b2862f-b8ca-4c95-b96b-601df402c353.jpg?tr=w-180,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/bc90b73e-6137-4581-af82-c62503f911c6.jpg?tr=w-180,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/2062ae54-7335-4a21-b4dc-5c437564484d.jpg?tr=w-180,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/210949ac-efa6-48af-9a0c-9d3e51568bc0.jpg?tr=w-180,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/48822954-33d4-4246-9b7c-89c3600deb0b.jpg?tr=w-180,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/622b7a55-204e-4d55-8a7c-52e1b2e660fa.jpg?tr=w-180,cm-pad_resize"
  ]

    return(
        <>
         <div>
          <img src={"https://images-static.nykaa.com/uploads/3b80d12e-4a57-4d8d-9e7e-a8c85b9da4c4.jpg?tr=w-1800,cm-pad_resize"} alt=""/>
        </div>
        {/* looping through images to set all in one container */}
        <div class="container">
         <div class="row">
             {images.map((img, index) => (
               <div class="col-1" key={index}>
                 <img src={img} alt=""/>
               </div>
             ))}  
         </div>
        </div>
       
       
</>     
    )
}

export default Nykahomepage;