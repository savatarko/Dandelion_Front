export interface TextSimilarityResponse{
  similarity: string
}

export interface detectedLangs{
  lang: string,
  confidence: number,
}

export interface LanguageDetectionResponse{
  detectedLangs:detectedLangs[]
}

export interface sentiment{
  type:string,
  score:number
}

export interface SentimentAnalysisResponse{
  sentiment: sentiment
  timestamp: string
}

export interface image{
  thumbnail: string
}
export interface annotation{
  label: string,
  image: image,
  abstract: string,
  categories: string[]
}
export interface EntityExtractionResponse{
  annotations: annotation[]
}

export interface Request{
  timestamp: string,
  url: string
}
