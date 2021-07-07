import React, { useState } from 'react'

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

import Meal from './Meal';
import useRemoteData from './fetchFoods';
import ReactStars from 'react-rating-stars-component';
import spv from './images/spv.svg';


function App() {

const [datas,error, loading] = useRemoteData()
const [showPreview, setShowPreview] = useState(false)
    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                {
                    loading && (
                        <div className="my-5 justify-content-center text-center">
                            <img src={spv} className="text-warning" alt="" />
                            <p>Please wait...</p>
                        </div>
                    )
                }
                {
                    error && (
                        <div className="my-5 justify-content-center text-center">
                            <h1>{error}</h1>
                        </div>
                    )
                }
                
                <AnimateSharedLayout type="crossfade">
                    {
                        !showPreview.id &&(
                        datas.map((data) => (
                            <motion.div layoutId={data.id} 
                            className="col-md-4 col-sm-6 mb-3">
                                <Meal 
                                    key= {`${data.id}`}
                                    image = {`${data.strMealThumb}`}
                                    description = {`${data.description}`}
                                    strMeal = {`${data.strMeal}`}
                                    title = {`${data.title}`}
                                    price = {`${data.price}`}
                                    ratings = {data.ratings}
                                    preview = {() => setShowPreview(data)}
                                />
                            </motion.div> 
                            
                        )))
                    }
                     <AnimatePresence>
                   { showPreview.id && (
                    <motion.div onClick= {()=> setShowPreview(false)}
                    layoutId={showPreview.id}
                    initial={{opacity: 1, y: -400}}
                    animate={{ rotate: 360,
                        y:0, 
                        transition:{ duration: 1 }
                    }}
                    exit={{opacity: 0 }}
                    
                    className="container my-5">
                        <motion.h1 className="text-center mb-4">{showPreview.title}</motion.h1>
                        <motion.div className="row justify-content-between">
                            <motion.div className="col-md-5" style={{height: "400px"}}>
                                <img src={showPreview.strMealThumb} className="card-img h-100" alt="" />
                            </motion.div>
                            <motion.div 
                            className="col-md-7 justify-content-center align-middle" 
                            style={{height: "400px"}}>
                                <motion.div className="">
                                    <div className="card-body text-justify">
                                    <h5 className="card-title">
                                        <span>{showPreview.title}</span>
                                        <span className="float-end">{showPreview.price}</span>
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{showPreview.strMeal}</h6>
                                    <div className="mb-2">
                                        <span className="fw-bold">
                                            Rating:
                                        </span>
                                    <span className="float-end">
                                        <ReactStars 
                                        count= {showPreview.ratings}
                                        size= {24}
                                        color="#ffd700"
                                        />
                                    </span>
                                    </div>
                                    <hr/>
                                    
                                    <p className="card-text lh-lg">{showPreview.description}</p>
                                </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        
                    </motion.div>
                )}
                </AnimatePresence>
                    
                </AnimateSharedLayout>   
            </div>
            {!showPreview && !loading &&(
                <div className="my-5 justify-content-center text-center">
                <a href="" className="btn btn-warning  text-white" style={{ borderRadius: "20px"}}>Learn More</a>
            </div>
            )} 
        </div>
    )

}

export default App;