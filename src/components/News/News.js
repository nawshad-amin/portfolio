import { react } from '@babel/types';
import React from 'react';
import  { useState } from 'react'
import './news.css';
import Modal from "react-modal"

 

const News = () => {
  const [theModal,setTheModal] = useState(false);
  const [theModal2,setTheModal2] = useState(false);
  const [theModal3,setTheModal3] = useState(false);
  const [theModal4,setTheModal4] = useState(false);

    return (
        <div>
            <div class="news_section">
                <h5 class="News">News</h5>
            
                    <h6>Latest News</h6> 
          
                
                      <div class="newsPhotos">
                        <div  class="photo1">
                            <img onClick={()=>setTheModal(true)} src="https://i.postimg.cc/Z5xwtd2h/833202cfe17feeea0729b547c416e28b.jpg" alt=""/>
                            
                              <h3>By Nawshad Othman / on 28 jun 2021</h3>
                              <p id="line">_____________________________________________________________________________________</p>
                              <p id="dicription">Pets can catch Covid from owners, study suggests</p>
                              <a ><p id="seeMore"><span>___</span></p></a>
                              <Modal isOpen={theModal} onRequestClose={()=>setTheModal(false)}> <div className="theModal">
                                <div >
                                <img className="modalPic" src="https://i.postimg.cc/Z5xwtd2h/833202cfe17feeea0729b547c416e28b.jpg" alt="" />
                                </div>
                                <div><p  className="modalDate">By Nawshad Othman / on 28 jun 2021</p></div>
                                <p className="modalLine">_________________________________________________________________________________________________________________________________</p>
                                <div><h2 className="modalTitle">Pets can catch Covid from owners, study suggests</h2></div>

                                <div><p className="modalText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos consequatur dicta cumque fuga suscipit assumenda enim, perferendis necessitatibus exercitationem quas eligendi quo alias quam, voluptatibus iure et. Ipsum ea odit expedita sunt libero repudiandae voluptatem voluptatum nemo quas excepturi, laborum aliquid perspiciatis cumque accusantium dicta rerum molestias et cupiditate reiciendis voluptas. Expedita adipisci, tempore assumenda quo nobis facere dicta itaque aspernatur in porro minima quos, aut ducimus quasi sunt doloribus tempora! Cum, vitae impedit. Nemo tenetur at minima voluptatibus dolorem sint eaque optio porro possimus odio illo rerum, nam delectus obcaecati. Doloribus, sapiente harum. Dolor voluptate numquam adipisci animi obcaecati quisquam, aut perferendis natus autem commodi consectetur, laboriosam debitis voluptatibus mollitia vitae tempore assumenda exercitationem enim cumque, perspiciatis dolores tempora ipsam labore! Nemo accusantium iste veritatis nesciunt magnam adipisci vitae. Totam delectus maiores minima fuga, molestias amet atque neque dignissimos laboriosam, nisi consequuntur similique non eaque. Doloremque, dolorum commodi voluptatem error aperiam aut, neque ab est quis voluptas culpa eligendi qui doloribus cumque quo at esse harum dolore soluta, eum quam non ut! Maiores obcaecati nulla debitis commodi officia eaque officiis cum, minus quam magni nam animi tempora sint dolor ipsa ut laudantium deleniti saepe. Sapiente alias minima dolores quod, itaque aliquam incidunt possimus quia omnis quaerat voluptatum in magnam facilis dolorem quam atque cumque architecto iure. Doloribus et, nisi, iure, quibusdam tempora dolorum ipsum inventore distinctio cupiditate sint ut vero? Assumenda nam labore eius id, quos asperiores sapiente nisi, autem consequuntur ab minus, natus laboriosam minima atque error tenetur vitae dolore! Labore iure earum cum voluptatum delectus. Aliquam ipsam necessitatibus eum quas, iusto magni! Nulla suscipit sunt obcaecati dignissimos dolor labore ut officia perferendis. Hic assumenda, ipsa dolores nobis architecto vel fugiat molestias eius odit asperiores ipsum molestiae nam rerum itaque autem eligendi debitis eos odio! Doloremque nam, sunt, animi voluptatum nesciunt error adipisci officiis sit fuga harum perspiciatis placeat quas odio praesentium iste velit nemo veniam. Necessitatibus nemo voluptatem hic earum itaque distinctio saepe iste fugit harum dolorem! Asperiores harum qui aperiam, eligendi libero aspernatur accusantium odio fuga laudantium maxime amet deserunt error quam perferendis voluptas placeat possimus eaque! Debitis fugiat consequuntur officia, neque harum tempore aut consectetur, nulla voluptatem adipisci accusantium voluptatum facere, ullam quis voluptatibus? Placeat blanditiis nobis, non impedit saepe nisi. Quae velit explicabo fugit quasi nemo sit. Eum rerum consectetur quo aliquam ipsum perspiciatis! Sunt nemo repellendus error numquam culpa rerum minus cupiditate?</p></div>
                                  
                                </div> </Modal>
                        
                        </div>
                        
                        <div class="photo2">
                            <img onClick={()=>setTheModal2(true)} src="https://i.postimg.cc/cC3cDgw2/HD-cat-background-pics-wallpaper.jpg" alt=""/>
                              <h3>By Nawshad Othman / on 28 jun 2021</h3>
                              <p id="line">_____________________________________________________________________________________</p>
                              <p id="dicription">Why do cats love catnip</p>
                              <a href="index.html"><p id="seeMore"><span>___</span></p></a>
                              <Modal isOpen={theModal2} onRequestClose={()=>setTheModal2(false)}> <div className="theModal">
                                <div >
                                <img className="modalPic" src="https://i.postimg.cc/cC3cDgw2/HD-cat-background-pics-wallpaper.jpg" alt="" />
                                </div>
                                <div><p  className="modalDate">By Nawshad Othman / on 28 jun 2021</p></div>
                                <p className="modalLine">_________________________________________________________________________________________________________________________________</p>
                                <div><h2 className="modalTitle">Why do cats love catnip</h2></div>

                                <div><p className="modalText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos consequatur dicta cumque fuga suscipit assumenda enim, perferendis necessitatibus exercitationem quas eligendi quo alias quam, voluptatibus iure et. Ipsum ea odit expedita sunt libero repudiandae voluptatem voluptatum nemo quas excepturi, laborum aliquid perspiciatis cumque accusantium dicta rerum molestias et cupiditate reiciendis voluptas. Expedita adipisci, tempore assumenda quo nobis facere dicta itaque aspernatur in porro minima quos, aut ducimus quasi sunt doloribus tempora! Cum, vitae impedit. Nemo tenetur at minima voluptatibus dolorem sint eaque optio porro possimus odio illo rerum, nam delectus obcaecati. Doloribus, sapiente harum. Dolor voluptate numquam adipisci animi obcaecati quisquam, aut perferendis natus autem commodi consectetur, laboriosam debitis voluptatibus mollitia vitae tempore assumenda exercitationem enim cumque, perspiciatis dolores tempora ipsam labore! Nemo accusantium iste veritatis nesciunt magnam adipisci vitae. Totam delectus maiores minima fuga, molestias amet atque neque dignissimos laboriosam, nisi consequuntur similique non eaque. Doloremque, dolorum commodi voluptatem error aperiam aut, neque ab est quis voluptas culpa eligendi qui doloribus cumque quo at esse harum dolore soluta, eum quam non ut! Maiores obcaecati nulla debitis commodi officia eaque officiis cum, minus quam magni nam animi tempora sint dolor ipsa ut laudantium deleniti saepe. Sapiente alias minima dolores quod, itaque aliquam incidunt possimus quia omnis quaerat voluptatum in magnam facilis dolorem quam atque cumque architecto iure. Doloribus et, nisi, iure, quibusdam tempora dolorum ipsum inventore distinctio cupiditate sint ut vero? Assumenda nam labore eius id, quos asperiores sapiente nisi, autem consequuntur ab minus, natus laboriosam minima atque error tenetur vitae dolore! Labore iure earum cum voluptatum delectus. Aliquam ipsam necessitatibus eum quas, iusto magni! Nulla suscipit sunt obcaecati dignissimos dolor labore ut officia perferendis. Hic assumenda, ipsa dolores nobis architecto vel fugiat molestias eius odit asperiores ipsum molestiae nam rerum itaque autem eligendi debitis eos odio! Doloremque nam, sunt, animi voluptatum nesciunt error adipisci officiis sit fuga harum perspiciatis placeat quas odio praesentium iste velit nemo veniam. Necessitatibus nemo voluptatem hic earum itaque distinctio saepe iste fugit harum dolorem! Asperiores harum qui aperiam, eligendi libero aspernatur accusantium odio fuga laudantium maxime amet deserunt error quam perferendis voluptas placeat possimus eaque! Debitis fugiat consequuntur officia, neque harum tempore aut consectetur, nulla voluptatem adipisci accusantium voluptatum facere, ullam quis voluptatibus? Placeat blanditiis nobis, non impedit saepe nisi. Quae velit explicabo fugit quasi nemo sit. Eum rerum consectetur quo aliquam ipsum perspiciatis! Sunt nemo repellendus error numquam culpa rerum minus cupiditate?</p></div>
                                  
                                </div> </Modal>
                        
                       
                    </div>
                    <div class="photo3">
                        <img onClick={()=>setTheModal3(true)} src="https://i.postimg.cc/FRyRDh1G/kotenok-milyi-fon.jpg" alt=""/>
                          <h3>By Nawshad Othman / on 28 jun 2021</h3>
                          <p id="line">_____________________________________________________________________________________</p>
                          <p id="dicription">Why you should worry about your pet’s ecological footprint</p>
                          <a href="index.html"><p id="seeMore"><span>___</span></p></a>
                          <Modal isOpen={theModal3} onRequestClose={()=>setTheModal3(false)}> <div className="theModal">
                                <div >
                                <img className="modalPic" src="https://i.postimg.cc/FRyRDh1G/kotenok-milyi-fon.jpg" alt="" />
                                </div>
                                <div><p  className="modalDate">By Nawshad Othman / on 28 jun 2021</p></div>
                                <p className="modalLine">_________________________________________________________________________________________________________________________________</p>
                                <div><h2 className="modalTitle">Why you should worry about your pet’s ecological footprint</h2></div>

                                <div><p className="modalText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos consequatur dicta cumque fuga suscipit assumenda enim, perferendis necessitatibus exercitationem quas eligendi quo alias quam, voluptatibus iure et. Ipsum ea odit expedita sunt libero repudiandae voluptatem voluptatum nemo quas excepturi, laborum aliquid perspiciatis cumque accusantium dicta rerum molestias et cupiditate reiciendis voluptas. Expedita adipisci, tempore assumenda quo nobis facere dicta itaque aspernatur in porro minima quos, aut ducimus quasi sunt doloribus tempora! Cum, vitae impedit. Nemo tenetur at minima voluptatibus dolorem sint eaque optio porro possimus odio illo rerum, nam delectus obcaecati. Doloribus, sapiente harum. Dolor voluptate numquam adipisci animi obcaecati quisquam, aut perferendis natus autem commodi consectetur, laboriosam debitis voluptatibus mollitia vitae tempore assumenda exercitationem enim cumque, perspiciatis dolores tempora ipsam labore! Nemo accusantium iste veritatis nesciunt magnam adipisci vitae. Totam delectus maiores minima fuga, molestias amet atque neque dignissimos laboriosam, nisi consequuntur similique non eaque. Doloremque, dolorum commodi voluptatem error aperiam aut, neque ab est quis voluptas culpa eligendi qui doloribus cumque quo at esse harum dolore soluta, eum quam non ut! Maiores obcaecati nulla debitis commodi officia eaque officiis cum, minus quam magni nam animi tempora sint dolor ipsa ut laudantium deleniti saepe. Sapiente alias minima dolores quod, itaque aliquam incidunt possimus quia omnis quaerat voluptatum in magnam facilis dolorem quam atque cumque architecto iure. Doloribus et, nisi, iure, quibusdam tempora dolorum ipsum inventore distinctio cupiditate sint ut vero? Assumenda nam labore eius id, quos asperiores sapiente nisi, autem consequuntur ab minus, natus laboriosam minima atque error tenetur vitae dolore! Labore iure earum cum voluptatum delectus. Aliquam ipsam necessitatibus eum quas, iusto magni! Nulla suscipit sunt obcaecati dignissimos dolor labore ut officia perferendis. Hic assumenda, ipsa dolores nobis architecto vel fugiat molestias eius odit asperiores ipsum molestiae nam rerum itaque autem eligendi debitis eos odio! Doloremque nam, sunt, animi voluptatum nesciunt error adipisci officiis sit fuga harum perspiciatis placeat quas odio praesentium iste velit nemo veniam. Necessitatibus nemo voluptatem hic earum itaque distinctio saepe iste fugit harum dolorem! Asperiores harum qui aperiam, eligendi libero aspernatur accusantium odio fuga laudantium maxime amet deserunt error quam perferendis voluptas placeat possimus eaque! Debitis fugiat consequuntur officia, neque harum tempore aut consectetur, nulla voluptatem adipisci accusantium voluptatum facere, ullam quis voluptatibus? Placeat blanditiis nobis, non impedit saepe nisi. Quae velit explicabo fugit quasi nemo sit. Eum rerum consectetur quo aliquam ipsum perspiciatis! Sunt nemo repellendus error numquam culpa rerum minus cupiditate?</p></div>
                                  
                                </div> </Modal>
                    
                    </div>
                    
                    <div class="photo4">
                        <img onClick={()=>setTheModal4(true)} src="https://i.postimg.cc/XY1yCNyC/cUb9jz.jpg" alt=""/>
                          <h3>By Nawshad Othman / on 28 jun 2021</h3>
                          <p id="line">_____________________________________________________________________________________</p>
                            <p id="dicription">Cats are believed to be the only mammals who don't taste sweetness</p>
                            <a href="index.html"><p id="seeMore"><span>___</span></p></a>
                            <Modal isOpen={theModal4} onRequestClose={()=>setTheModal4(false)}> <div className="theModal">
                                <div >
                                <img className="modalPic" src="https://i.postimg.cc/XY1yCNyC/cUb9jz.jpg" alt="" />
                                </div>
                                <div><p  className="modalDate">By Nawshad Othman / on 28 jun 2021</p></div>
                                <p className="modalLine">_________________________________________________________________________________________________________________________________</p>
                                <div className="modalTitle"><h2>Cats are believed to be the only mammals who don't taste sweetness</h2></div>

                                <div><p className="modalText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos consequatur dicta cumque fuga suscipit assumenda enim, perferendis necessitatibus exercitationem quas eligendi quo alias quam, voluptatibus iure et. Ipsum ea odit expedita sunt libero repudiandae voluptatem voluptatum nemo quas excepturi, laborum aliquid perspiciatis cumque accusantium dicta rerum molestias et cupiditate reiciendis voluptas. Expedita adipisci, tempore assumenda quo nobis facere dicta itaque aspernatur in porro minima quos, aut ducimus quasi sunt doloribus tempora! Cum, vitae impedit. Nemo tenetur at minima voluptatibus dolorem sint eaque optio porro possimus odio illo rerum, nam delectus obcaecati. Doloribus, sapiente harum. Dolor voluptate numquam adipisci animi obcaecati quisquam, aut perferendis natus autem commodi consectetur, laboriosam debitis voluptatibus mollitia vitae tempore assumenda exercitationem enim cumque, perspiciatis dolores tempora ipsam labore! Nemo accusantium iste veritatis nesciunt magnam adipisci vitae. Totam delectus maiores minima fuga, molestias amet atque neque dignissimos laboriosam, nisi consequuntur similique non eaque. Doloremque, dolorum commodi voluptatem error aperiam aut, neque ab est quis voluptas culpa eligendi qui doloribus cumque quo at esse harum dolore soluta, eum quam non ut! Maiores obcaecati nulla debitis commodi officia eaque officiis cum, minus quam magni nam animi tempora sint dolor ipsa ut laudantium deleniti saepe. Sapiente alias minima dolores quod, itaque aliquam incidunt possimus quia omnis quaerat voluptatum in magnam facilis dolorem quam atque cumque architecto iure. Doloribus et, nisi, iure, quibusdam tempora dolorum ipsum inventore distinctio cupiditate sint ut vero? Assumenda nam labore eius id, quos asperiores sapiente nisi, autem consequuntur ab minus, natus laboriosam minima atque error tenetur vitae dolore! Labore iure earum cum voluptatum delectus. Aliquam ipsam necessitatibus eum quas, iusto magni! Nulla suscipit sunt obcaecati dignissimos dolor labore ut officia perferendis. Hic assumenda, ipsa dolores nobis architecto vel fugiat molestias eius odit asperiores ipsum molestiae nam rerum itaque autem eligendi debitis eos odio! Doloremque nam, sunt, animi voluptatum nesciunt error adipisci officiis sit fuga harum perspiciatis placeat quas odio praesentium iste velit nemo veniam. Necessitatibus nemo voluptatem hic earum itaque distinctio saepe iste fugit harum dolorem! Asperiores harum qui aperiam, eligendi libero aspernatur accusantium odio fuga laudantium maxime amet deserunt error quam perferendis voluptas placeat possimus eaque! Debitis fugiat consequuntur officia, neque harum tempore aut consectetur, nulla voluptatem adipisci accusantium voluptatum facere, ullam quis voluptatibus? Placeat blanditiis nobis, non impedit saepe nisi. Quae velit explicabo fugit quasi nemo sit. Eum rerum consectetur quo aliquam ipsum perspiciatis! Sunt nemo repellendus error numquam culpa rerum minus cupiditate?</p></div>
                                  
                                </div> </Modal>
                    
                   
                </div>
            </div>
                
    

              </div>
        
            
        </div>
    )
}

export default News
