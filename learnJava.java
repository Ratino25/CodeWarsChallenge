package com.perusahaan.fileclassifier;

import com.perusahaan.fileclassifier.exception.FileProcessingException;
import com.perusahaan.fileclassifier.service.FileClassificationService;

import java.nio.file.Paths;

public class FileClassifierApplication {
    public static void main(String[] args) {
        // Default paths (bisa diubah sesuai kebutuhan)
        String inputDir = "./input/";
        String resourcesDir = "./src/main/resources/RESOURCES/";

        // Atau ambil dari argumen: 
        // if (args.length >= 2) { inputDir = args[0]; resourcesDir = args[1]; }

        FileClassificationService service = new FileClassificationService(inputDir, resourcesDir);

        try {
            service.classifyFiles();
            System.out.println("✅ Proses klasifikasi selesai.");
        } catch (FileProcessingException e) {
            System.err.println("❌ Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}