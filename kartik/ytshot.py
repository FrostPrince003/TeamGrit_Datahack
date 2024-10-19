import os
import cv2
import yt_dlp as youtube_dl  # Use yt-dlp for better support

def extract_frame(video_url, frame_position, output_filename):
    # Extract the video URL using yt-dlp
    ydl_opts = {}
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        info_dict = ydl.extract_info(video_url, download=False)
        formats = info_dict.get('formats', None)

        # Look for the desired format (144p in this case)
        for f in formats:
            if f.get('format_note') == '720p':
                video_url = f.get('url')
                break

    # Capture the video
    cap = cv2.VideoCapture(video_url)
    # Set the position to the desired frame
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_position)

    # Read the frame
    ret, frame = cap.read()
    if ret:
        # Save the frame as an image
        cv2.imwrite(output_filename, frame)
        print(f"Frame saved as {output_filename}")
    else:
        print("Error: Unable to read the frame.")

    cap.release()

# Example usage
video_url = "https://www.youtube.com/watch?v=tsu01TR7Ofk"  # The YouTube URL
frame_position = 10  # Frame number you want to extract (e.g., 10 for the 10th frame)
output_filename = "output_frame.png"  # Name of the output image file

extract_frame(video_url, frame_position, output_filename)