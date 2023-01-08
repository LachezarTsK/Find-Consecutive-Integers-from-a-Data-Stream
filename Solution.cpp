
using namespace std;

class DataStream {
    
    int targetValue;
    int targetFrequency;
    int currentFrequency{};
    
public:
    DataStream(int targetValue, int targetFrequency) : targetValue {targetValue}, targetFrequency {targetFrequency}{}

    bool consec(int value) {
        currentFrequency = (value == targetValue) ? (currentFrequency + 1) : 0;
        return currentFrequency >= targetFrequency;
    }
};
