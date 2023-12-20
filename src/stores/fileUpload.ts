import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useFileUpload = defineStore('fileUpload', () => {
  const selectedFile: Ref<File | null> = ref(null)
  const fileAddress: Ref<string> = ref('')
  const fileType: Ref<string> = ref('')
  const fileName: Ref<string> = ref('')
  const currentTime: Ref<number> = ref(0)

  function storeData(data: File): void {
    selectedFile.value = data
    fileAddress.value = URL.createObjectURL(selectedFile.value as File)
    localStorage.setItem('name', (selectedFile.value as File).name)
    localStorage.setItem('type', (selectedFile.value as File).type)
  }

  function restoreFileType(): void {
    fileType.value = localStorage.getItem('type') || ''
  }

  function restoreFileName(): void {
    fileName.value = localStorage.getItem('name') || ''
  }

  function setTime(prefix: string, data: number): void {
    currentTime.value = data
    localStorage.setItem(prefix + ':time', JSON.stringify(currentTime.value))
  }

  function restoreTime(prefix: string): void {
    currentTime.value = Number(localStorage.getItem(prefix + ':time')) || 0
  }

  return { selectedFile, fileAddress, currentTime, fileType, fileName, setTime, restoreTime, restoreFileType, storeData, restoreFileName }
})
