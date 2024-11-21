from datasets import load_dataset  # Hugging Face
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

huggingface_dataset_name = "knkarthick/dialogsum"
dataset = load_dataset(huggingface_dataset_name)

model_name = 'google/flan-t5-base'
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name, use_fast=True)

dialogue="How are you?how abut your date?"

def get_summary(dialogue):
  
    prompt = f"""
    Dialogue:
    {dialogue}
    What was going on?
    """
    
    # Tokenize the input
    inputs = tokenizer(prompt, return_tensors="pt", max_length=512, truncation=True)
    
    # Generate summary
    outputs = model.generate(inputs['input_ids'], max_length=150, num_beams=4, early_stopping=True)
    summary = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    return summary

