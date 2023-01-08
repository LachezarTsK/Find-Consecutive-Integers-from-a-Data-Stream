
public class DataStream {

    int targetValue;
    int targetFrequency;
    int currentFrequency;

    public DataStream(int targetValue, int targetFrequency) {
        this.targetValue = targetValue;
        this.targetFrequency = targetFrequency;
    }

    public boolean consec(int value) {
        currentFrequency = (value == targetValue) ? (currentFrequency + 1) : 0;
        return currentFrequency >= targetFrequency;
    }
}
