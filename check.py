from gtts import gTTS
import os

# Text to be converted to speech
text = "Congratulations for winning datahack"

# Language in which you want to convert
language = 'en'

# Passing the text and language to the engine, slow=False makes the speech faster
tts = gTTS(text=text, lang=language, slow=False)

# Saving the speech to a file
tts.save("output.mp3")

# Playing the speech (optional)
os.system("start output.mp3")  # For Windows
# os.system("mpg321 output.mp3")  # For Linux
