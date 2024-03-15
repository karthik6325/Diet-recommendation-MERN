import React, { useEffect, useState } from "react"
import "./RecipieDetails.css"
import { useParams } from "react-router-dom"

const RecipieDetails = (recipieDetail) => {
    const [recipieDetailparts, setRecipieDetailparts] = useState('')
    const [recipieDetailInstructions, setRecipieDetailInstructions] = useState('')
    useEffect(() => {
        console.log(recipieDetail.recipieDetail)
        console.log(recipieDetail.recipieDetail.image_url)
        console.log(recipieDetail.recipieDetail.Name)

        setRecipieDetailparts(parseStringArrayPreserveCommas(recipieDetail.recipieDetail.RecipeIngredientParts));

        // Parse RecipeIngredientParts
        setRecipieDetailInstructions(parseStringArray(recipieDetail.recipieDetail.RecipeInstructions));
    }, [recipieDetail.recipieDetail])

    const parseStringArray = (str) => {
        // Remove 'c()' wrapper
        const strippedStr = str.replace(/^c\(|\)$/g, '');
        // Remove inverted commas
        const withoutInvertedCommas = strippedStr.replace(/"/g, '');
        // Split the string by ','
        return withoutInvertedCommas.split(/,\s*/);
    };
    const parseStringArrayPreserveCommas = (str) => {
        // Remove 'c()' wrapper
        const strippedStr = str.replace(/^c\(|\)$/g, '');
        // Remove specified characters (backslashes, single quotes, double quotes)
        const cleanedStr = strippedStr.replace(/\\|'|"|\\/g, '');
        // Split the string by ','
        return cleanedStr.split(/,\s*/);
    };
    return (
        <div className="recipie">
            <div className="recipie__intro">
                <img className="recipie__backdrop" src={recipieDetail.recipieDetail.image_url} />
            </div>
            <div className="recipie__detail">
                <div className="recipie__detailLeft">
                    <div className="recipie__posterBox">
                        <img className="recipie__poster" src={recipieDetail.recipieDetail.image_url} />
                    </div>
                </div>
                <div className="recipie__detailRight">
                    <div className="recipie__detailRightTop">
                        <div className="recipie__name">{recipieDetail.recipieDetail ? recipieDetail.recipieDetail.Name : ""}</div>
                        <div className="recipie__tagline">{recipieDetail.recipieDetail ? recipieDetailparts
                            : ""}</div>
                    </div>
                    <div className="recipie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{recipieDetail.recipieDetail ? recipieDetailInstructions : ""}</div>
                    </div>

                </div>
            </div>
            {/* <div className="recipie__links">
                <div className="recipie__heading">Useful Links</div>
                {
                    recipieDetail.recipieDetail && recipieDetail.recipieDetail.homepage && <a href={recipieDetail.recipieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="recipie__homeButton recipie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    recipieDetail.recipieDetail && recipieDetail.recipieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + recipieDetail.recipieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="recipie__imdbButton recipie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div> */}
            {/* <div className="recipie__heading">Production companies</div>
            <div className="recipie__production">
                {
                    recipieDetail.recipieDetail && recipieDetail.recipieDetail.production_companies && recipieDetail.recipieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="recipie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div> */}
        </div>
    )
}

export default RecipieDetails